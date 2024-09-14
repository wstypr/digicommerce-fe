import { useState } from 'react';

export const useTag = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [tag, setTag] = useState<string>('');

    const handleAddTag = (event: React.KeyboardEvent) => {
        if (event.code === 'Enter') {
            if (!tags.includes(tag)) {
                setTags([...tags, tag]);
            }
            setTag('');
        }
    };

    const handleDeleteTag = (deletedIndex: number) => {
        setTags(tags.filter((_, index) => deletedIndex !== index));
    };

    const handleChangeTag = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTag(event.target.value);
    };

    return { tags, tag, handleAddTag, handleDeleteTag, handleChangeTag };
};
