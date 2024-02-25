import React, { useCallback } from 'react';

interface DropzoneProps {
    onDrop: (files: File[]) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ onDrop }) => {
    const handleDrop = useCallback(
        (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            const files = [...e.dataTransfer.files];
            onDrop(files);
        },
        [onDrop]
    );

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }, []);

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{ width: '100%', height: '200px', border: '2px dashed #aaa' }}
        >
            Drop files here
        </div>
    );
};

export default Dropzone;
