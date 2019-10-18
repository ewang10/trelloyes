import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List 
            header="first header"
            cards={[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]}
            id='a'
        />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const tree = renderer
            .create(<List 
                header="first header"
                cards={[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]}
                id='a'
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});