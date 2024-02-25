'use client';

import Dropzone from "@/components/Dropzone";
import {useState} from "react";

export const InputDataForm = () => {
    const [droppedFile, setDroppedFile] = useState<File[]>();

    console.log(droppedFile[0]?.name);

    return (
        <div>
            <div>
                <Dropzone onDrop={(files: File[]) => setDroppedFile(files)} />
                <div>
                    <h2>Uploaded Images</h2>
                    <div>
                        {droppedFile.map((file, index) => (
                            <img
                                key={index}
                                src={URL.createObjectURL(file)}
                                alt={`Uploaded Image ${index + 1}`}
                                style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}