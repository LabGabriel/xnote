import TextArea from "components/TextArea";
import React from "react";
import { TabPanel, Tabs } from "react-tabs";
import { INoteFields } from "../common/types/types.dialog";
import { IXnoteContent } from "../types/types.component";
import { ButtonPlus, TabListStyled, TabStyled } from "./styled";

const TabsView: React.FC<any> = ({ storage, openDialogNewNote }) => {
    return (
        <Tabs>
            <TabListStyled>
                <div className="tab-area custom-scroll">
                    <ButtonPlus onClick={openDialogNewNote}>+</ButtonPlus>
                    {
                        storage && !!storage.length ?
                            (
                                storage.map((note: INoteFields) => {
                                    return (
                                        <TabStyled
                                            key={note.id_note}
                                            data-id={note.id_note}
                                            title="Double click select options">
                                            {note.title}
                                        </TabStyled>
                                    )
                                })
                            ) : "Add new note"
                    }
                </div>
            </TabListStyled>
            {
                storage &&
                (
                    storage.map((xnote: IXnoteContent) => {
                        return (
                            <TabPanel key={xnote.id_note}>
                                <TextArea
                                    dataId={`${xnote.id_note}`}
                                    defaultValue={xnote.content}
                                // onChange={handleContent}
                                />
                            </TabPanel>
                        )
                    })
                )
            }
        </Tabs>
    )
}

export default TabsView;