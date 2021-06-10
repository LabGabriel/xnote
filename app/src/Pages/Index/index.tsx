import React, { useState } from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

//Components
import PageStrecture from 'Components/PageStrecture';
import TextArea from 'Components/TextArea';

//Styled
import { TabListStyled, TabStyled, ButtonPlus } from './styled';

const Index: React.FC = () => {
 
    return (
        <PageStrecture>
            <Tabs>
                <TabListStyled>
                    <TabStyled onDoubleClick={changedNameTab}>Title 1</TabStyled>
                    <ButtonPlus>+</ButtonPlus>
                </TabListStyled>

                <TabPanel>
                    <TextArea />
                </TabPanel>
            </Tabs>

            

            {/* @typescript-eslint/no-unused-vars */}
            {/* <Tabs>
                <TabList>
                    {obj.map(value => {
                        return (
                            <Tab key={value.id}>{value.title}</Tab>
                        )
                    })}
                </TabList>


                {obj.map(value => {
                    return (
                        <TabPanel>
                            <h2>{value.content}</h2>
                        </TabPanel>
                    )
                })}

            </Tabs> */}
        </PageStrecture>
    )
}

export default Index;