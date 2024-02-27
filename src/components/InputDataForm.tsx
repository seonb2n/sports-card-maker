'use client';

import Dropzone from "@/components/Dropzone";
import {ReactNode, useState} from "react";
import {ImageContainer} from "@/components/ImageContainer";
import {TextField, Typography} from "@mui/material";

export const InputDataForm = () => {
    const [droppedFile, setDroppedFile] = useState<File[]>();

    const renderInputRow = (label: string, inputForm: ReactNode) => {
        return (
            <div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
                <Typography style={{width: '300px'}}>
                    {label}
                </Typography>
                <div style={{flex: 1, paddingLeft: 5}}>
                    {inputForm}
                </div>
            </div>
        );
    }

    return (
        <div>
            <div>
                <div>
                    <h2>Generated Images</h2>
                    <div>
                        <ImageContainer imgFile={droppedFile}/>
                    </div>
                </div>
                <div>
                    <div>
                        {renderInputRow('카드의 인물이 될 사진을 업로드해주세요.', <Dropzone
                            onDrop={(files: File[]) => setDroppedFile(files)}/>)}
                    </div>
                    <div>
                        {renderInputRow('등번호를 입력해주세요.', <TextField id="outlined-basic" label="예) 23"
                                                                   variant="outlined"/>)}
                    </div>
                    <div>
                        {renderInputRow('이름을 입력해주세요.', <TextField id="outlined-basic" label="예) MJ"
                                                                  variant="outlined"/>)}
                    </div>
                    <div>
                        {renderInputRow('소속 팀을 입력해주세요.', <TextField id="outlined-basic" label="예) Bulls"
                                                                    variant="outlined"/>)}
                    </div>
                    <div>
                        {renderInputRow('공격 능력치를 입력해주세요.', <TextField id="outlined-basic" label="예) 100"
                                                                      variant="outlined"/>)}
                    </div>
                    <div>
                        {renderInputRow('수비 능력치를 입력해주세요.', <TextField id="outlined-basic" label="예) 100"
                                                                      variant="outlined"/>)}
                    </div>
                    <div>
                        {renderInputRow('신체 능력치를 입력해주세요.', <TextField id="outlined-basic" label="예) 100"
                                                                      variant="outlined"/>)}
                    </div>
                    <div>
                        {renderInputRow('포지션을 입력해주세요.', <TextField id="outlined-basic" label="예) SF"
                                                                      variant="outlined"/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}