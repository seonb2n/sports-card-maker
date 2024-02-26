'use client';

import Dropzone from "@/components/Dropzone";
import {useState} from "react";
import {ImageContainer} from "@/components/ImageContainer";

export const InputDataForm = () => {
    const [droppedFile, setDroppedFile] = useState<File[]>();

    return (
        <div>
            <div>
                <div>
                    <h2>Generated Images</h2>
                    <div>
                        <ImageContainer imgFile={droppedFile} />
                    </div>
                </div>
                <div>
                    <Dropzone onDrop={(files: File[]) => setDroppedFile(files)} />
                </div>
            </div>
        </div>
    );
}