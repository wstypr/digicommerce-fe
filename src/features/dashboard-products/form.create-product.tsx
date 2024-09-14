import { LayoutDashboard } from '../dashboard/components/layout';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Button } from '../../components/ui/button';
import { Select } from '../../components/ui/select';
import { useTag } from './hooks/useTag';

const CATEGORIES = [
    { value: '1', label: 'Category 1' },
    { value: '2', label: 'Category 2' },
    { value: '3', label: 'Category 3' },
    { value: '4', label: 'Category 4' },
];

export const FormCreateProduct = () => {
    const { tags, tag, handleAddTag, handleDeleteTag, handleChangeTag } = useTag();

    return (
        <LayoutDashboard isCentered>
            <main>
                <section className="space-y-5">
                    <div>
                        <h3>Create Product</h3>
                    </div>
                    <section className="space-y-2">
                        <Input placeholder="Product Name" />
                        <Textarea placeholder="Product Description" rows={6} />
                        <Select caption="Category" options={CATEGORIES} />
                        <Button variant="outline" className="block">
                            Add Images
                        </Button>
                        <Button variant="outline" className="block">
                            Add Downloadable File
                        </Button>
                        <Input placeholder="Tags" onKeyUp={handleAddTag} onChange={handleChangeTag} value={tag} />
                        <ProductTagsRenderer tags={tags} handleDeleteTag={handleDeleteTag} />
                    </section>
                    <Button className="block">Submit Product</Button>
                </section>
            </main>
        </LayoutDashboard>
    );
};

export const ProductTagsRenderer = ({ tags, handleDeleteTag }: { tags: string[]; handleDeleteTag: (deletedIndex: number) => void }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
                <div
                    key={index}
                    className="rounded-full border bg-slate-200 px-4 py-1 text-sm hover:cursor-pointer hover:bg-rose-500 hover:text-white"
                    onClick={() => handleDeleteTag(index)}
                >
                    {tag}
                </div>
            ))}
        </div>
    );
};
