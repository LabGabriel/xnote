import TextArea from "components/TextArea";
import React from "react";
import { TabPanel, Tabs } from "react-tabs";
import { IXnoteContent } from "../types/types.component";
import { ButtonPlus, TabListStyled, TabStyled } from "./styled";

const TabsWrapperView: React.FC<any> = ({ noteContent, createTab }) => {
    return (
        <Tabs>
            <TabListStyled>
                <div className="tab-area custom-scroll">
                    <ButtonPlus onClick={createTab}>+</ButtonPlus>
                    {
                        noteContent && !!noteContent.length ?
                            (
                                noteContent.map((xnote: IXnoteContent) => {
                                    return (
                                        <TabStyled
                                            key={xnote.id_note}
                                            data-id={xnote.id_note}
                                            title="Double click select options">
                                            {xnote.title_note}
                                        </TabStyled>
                                    )
                                })
                            ) : "Add new note"
                    }
                </div>
            </TabListStyled>
            {
                noteContent &&
                (
                    noteContent.map((xnote: IXnoteContent) => {
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

export default TabsWrapperView;