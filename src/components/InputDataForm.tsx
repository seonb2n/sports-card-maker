'use client';

import Dropzone from "@/components/Dropzone";
import {ChangeEvent, ReactNode, useState} from "react";
import {ImageContainer} from "@/components/ImageContainer";
import {MenuItem, TextField, Typography} from "@mui/material";

export const InputDataForm = () => {
    const [droppedFile, setDroppedFile] = useState<File[]>();
    const [backNumber, setBackNumber] = useState<number>(23);
    const [name, setName] = useState<string>('michael jordan');
    const [team, setTeam] = useState<string>('bulls');
    const [attack, setAttack] = useState<number>(100);
    const [defense, setDefense] = useState<number>(100);
    const [physical, setPhysical] = useState<number>(100);
    const [position, setPosition] = useState<string>('sf');

    const handleChangeBackNumber = (input: string) => {
        const numericValue = parseInt(input, 10);
        if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 99) {
            setBackNumber(numericValue);
        }
    }

    const handleChangeName = (input: string) => {
        setName(input);
    }

    const handleChangeTeam = (input: string) => {
        setTeam(input);
    }

    const handleChangeAttack = (input: string) => {
        const numericValue = parseInt(input, 10);
        if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100) {
            setAttack(numericValue);
        }
    }

    const handleChangeDefense = (input: string) => {
        const numericValue = parseInt(input, 10);
        if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100) {
            setDefense(numericValue);
        }
    }

    const handleChangePhysical = (input: string) => {
        const numericValue = parseInt(input, 10);
        if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100) {
            setPhysical(numericValue);
        }
    }

    const handleChangePosition = (input: string) => {
        setPosition(input);
    }

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
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <ImageContainer
                            imgFile={droppedFile}
                            backNumber={backNumber}
                            name={name}
                            team={team}
                            attack={attack}
                            defense={defense}
                            physical={physical}
                            position={position}
                        />
                    </div>
                </div>
                <div>
                    <div style={{marginTop: '10px'}}>
                        {renderInputRow('카드의 인물이 될 사진을 업로드해주세요.', <Dropzone
                            onDrop={(files: File[]) => setDroppedFile(files)}/>)}
                    </div>
                    <div style={{marginTop: '10px'}}>
                        {renderInputRow('등번호를 입력해주세요.', <TextField fullWidth id="outlined-basic" label="예) 23"
                                                                   type="number"
                                                                   inputProps={{
                                                                       inputMode: 'numeric',
                                                                       pattern: '[0-9]*',
                                                                   }}
                                                                   onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeBackNumber(e.target.value)}
                                                                   variant="outlined"/>)}
                    </div>
                    <div style={{marginTop: '10px'}}>
                        {renderInputRow('이름을 입력해주세요.', <TextField fullWidth id="outlined-basic" label="예) MJ"
                                                                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeName(e.target.value)}
                                                                  variant="outlined"/>)}
                    </div>
                    <div style={{marginTop: '10px'}}>
                        {renderInputRow('소속 팀을 입력해주세요.', <TextField fullWidth id="outlined-basic" label="예) Bulls"
                                                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeTeam(e.target.value)}
                                                                    variant="outlined"/>)}
                    </div>
                    <div style={{marginTop: '10px'}}>
                        {renderInputRow('공격 능력치를 입력해주세요.', <TextField fullWidth id="outlined-basic" label="예) 100"
                                                                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAttack(e.target.value)}
                                                                      variant="outlined"/>)}
                    </div>
                    <div style={{marginTop: '10px'}}>
                        {renderInputRow('수비 능력치를 입력해주세요.', <TextField fullWidth id="outlined-basic" label="예) 100"
                                                                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeDefense(e.target.value)}
                                                                      variant="outlined"/>)}
                    </div>
                    <div style={{marginTop: '10px'}}>
                        {renderInputRow('신체 능력치를 입력해주세요.', <TextField fullWidth id="outlined-basic" label="예) 100"
                                                                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangePhysical(e.target.value)}
                                                                      variant="outlined"/>)}
                    </div>
                    <div style={{marginTop: '10px'}}>
                        {renderInputRow('포지션을 입력해주세요.', <TextField
                            fullWidth
                            select
                            label="Select position"
                            variant="outlined"
                            value={position}
                            onChange={(e) => handleChangePosition(e.target.value)}
                        ><MenuItem value="sg">Shooting Guard</MenuItem>
                            <MenuItem value="pg">Point Guard</MenuItem>
                            <MenuItem value="sf">Small Forward</MenuItem>
                            <MenuItem value="pf">Power Forward</MenuItem>
                            <MenuItem value="c">Center</MenuItem>
                        </TextField>)}
                    </div>
                </div>
            </div>
        </div>
    );
}