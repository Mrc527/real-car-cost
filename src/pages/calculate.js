import React, {useState} from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import {Button, Steps} from "antd";
import 'antd/dist/antd.css';


export default function CalculatePage() {
    const steps = [
        {
            title: 'First',
            content: 'First-content',
        },
        {
            title: 'Second',
            content: 'Second-content',
        },
        {
            title: 'Last',
            content: 'Last-content',
        },
    ];

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <div style={{width: "90%", margin:"auto"}}>
            <Seo title="Calculate the real cost of your car" useTitleTemplate={false} noIndex={true} />
            <Page useSplashScreenAnimation>
            <Steps current={current}>
                {steps.map(item => (
                    <Steps.Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => console.log('Processing complete!')}>
                        Done
                    </Button>
                )}
            </div>
            </Page>
        </div>
    );
};

