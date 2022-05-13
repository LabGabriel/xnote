import TextArea from "components/TextArea";
import React from "react";
import { TabPanel, Tabs } from "react-tabs";
import { INoteFields } from "../common/types/dialog";
import { ButtonPlus, TabListStyled, TabStyled } from "./styled";
import { ITabs } from "./types/types.component";

const TabsView: React.FC<ITabs> = (props) => {
    const { 
        storage,
        openDialogCreate,
        openDialogEdit,
        handleContent,
        onSelect,
        lastSelectedTab
    } = props;
    return (
        <Tabs onSelect={onSelect} defaultIndex={Number(lastSelectedTab)}>
            <TabListStyled>
                <div className="tab-area custom-scroll">
                    <ButtonPlus onClick={openDialogCreate}>+</ButtonPlus>
                    {
                        !!storage.length ?
                            (
                                storage.map((note: INoteFields) => {
                                    return (
                                        <TabStyled
                                            key={note.id_note}
                                            data-id={note.id_note}
                                            title="Double click select options"
                                            onDoubleClick={() => openDialogEdit(note.id_note, note.title)}
                                        >
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
                    storage.map((note: INoteFields) => {
                        return (
                            <TabPanel key={note.id_note}>
                                <TextArea
                                    dataId={`${note.id_note}`}
                                    defaultValue={note.content}
                                    onChange={handleContent}
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