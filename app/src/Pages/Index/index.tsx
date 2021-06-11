import React, { useState } from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

//Components
import PageStrecture from 'Components/PageStrecture';
import TextArea from 'Components/TextArea';
import InputTabName from 'Components/InputTabName';

//Styled
import { TabListStyled, TabStyled, ButtonPlus } from './styled';

const Index: React.FC = () => {
    const [isInputActive, setIsInputActive] = useState(false);

    const toggleInput = () => {
        setIsInputActive(!isInputActive);
    }
    
    const newTab = () => {
    }

    return (
        <PageStrecture>
            <Tabs>
                <TabListStyled>
                    <div className="tab-area">
                        <TabStyled onDoubleClick={toggleInput} title="Double click edit name tab">
                            Tab
                        </TabStyled>
                        <ButtonPlus onClick={newTab}>+</ButtonPlus>
                    </div>

                    {
                        isInputActive && (
                            <InputTabName
                                onClick={toggleInput}
                            />
                        )
                    }

                </TabListStyled>

                <TabPanel>
                    <TextArea
                        defaultValue={""}
                    />
                </TabPanel>
            </Tabs>
        </PageStrecture>
    )
}

export default Index;