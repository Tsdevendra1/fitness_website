import * as React from 'react';

interface GenericPageProps {

}
interface GenericPageState {

}

export default class GenericPage extends React.Component<GenericPageProps, GenericPageState> {
    render() {
        return (
            <div>
                <h1>THIS IS A TEST</h1>
            </div>
        )
    }
}
