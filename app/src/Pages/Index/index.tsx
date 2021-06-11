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
    return (
        <PageStrecture>
            <Tabs>
                <TabListStyled>
                    <div className="tab-area">
                        <TabStyled>
                            Tab
                        </TabStyled>
                        <TabStyled>
                            Tab
                        </TabStyled>
                        <TabStyled>
                            Tab
                        </TabStyled>
                        <ButtonPlus>+</ButtonPlus>
                    </div>

                    <InputTabName />

                </TabListStyled>

                <TabPanel>
                    <TextArea
                        defaultValue={""}
                    />                    
                </TabPanel>
                <TabPanel>
                    2
                </TabPanel>

            </Tabs>
        </PageStrecture>
    )
}

export default Index;