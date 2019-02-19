import React from 'react';
import {shallow} from 'enzyme';
import App from "./App";

const app = shallow (<App/>);

describe('App',()=>{
    it('renders correctly',()=>{
        expect(app).toMatchSnapshot()
    })
    it('ititialises the state with empty list of gifts',()=>{
        expect(app.state().gifts).toEqual([])
    })
    describe("when clicking the add-gift button",()=>{
        const id = 1
        beforeEach(()=>{
            app.find('.btn-add').simulate('click')
        })
        afterEach(()=>{
            app.setState({gifts:[]})
        })
        it('adds a new gift to state when clicking',()=>{
            expect(app.state().gifts).toEqual([{id}])
        })
        it('adds new gift to the rendered list when clicked',()=>{
            expect(app.find('.gift-list').children().length).toEqual(1)
        })
        it('creates a Gift component',()=>{
            expect(app.find("Gift").exists()).toBe(true)
        })
    })
    describe('the user removing a gift',()=>{
        beforeEach(()=>{
            app.instance().removeGift(1)
        })
        it('removes a gift from state',()=>{
            expect(app.state().gifts).toEqual([])
        })
    })
})