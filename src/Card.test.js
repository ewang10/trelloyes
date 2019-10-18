import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Card from './Card';

describe('Card component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card key='a' title='title' content='content'/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const tree = renderer
            .create(<Card key='a' title='title' content='content'/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});