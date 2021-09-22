import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../src/pages/home/Home'
configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

describe('Test home page',()=>{
    it('testing classname exist',()=>{
        let wrapper=shallow(<Home/>);
        console.log(wrapper.debug());
    })

})