import * as React from 'react';
import  {create, act} from 'react-test-renderer';
import { shallow } from 'enzyme';
import  renderer from 'react-test-renderer';
import { MonoText } from '../StyledText';
import SubmitButton from '../SubmitButton';
import {render, cleanup, fireEvent} from '@testing-library/react-native';

describe('<SubmitButton>', () => {
        describe('as default', () => {
        const submitbutton = render(
            <SubmitButton
                text="TestButton" 
                showSeparator={true}
                onPress={() => {}}
                navigation={() => {}} 
                separator_text="Sign in"
            />
        );

        it(`create new submit button correctly`, () => {
            const tree = renderer.create(<SubmitButton text="test button"/>).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('Renders successfully', () => {
            expect(submitbutton).toBeDefined();
        });

        it('show separator', () => {
            const rendered = render(<SubmitButton showSeparator={true}/>);
            expect(rendered.getByTestId('separator')).toBeTruthy();
        });


        it('Outputs the correct text for separator', () => {
            const rendered = render(<SubmitButton showSeparator={true} separator_text="SignIn" />);
            expect(rendered.getByText('SignIn')).toBeTruthy();
        });

        it(`submit button runs onPress`, () => {
            const onSubmit = jest.fn();
            const rendered = render(<SubmitButton onPress={ onSubmit  } text='CustomLink Component'/>);
            const buttonComponent = rendered.getByTestId('submiButton');
            fireEvent(buttonComponent, 'press');
            expect(onSubmit).toHaveBeenCalled();
        });

        it(`submit button runs onPress`, () => {
            const onSubmit = jest.fn();
            const rendered = render(<SubmitButton onPress={ onSubmit  } text='CustomLink Component'/>);
            const buttonComponent = rendered.getByTestId('submiButton');
            fireEvent(buttonComponent, 'press');
            expect(onSubmit).toHaveBeenCalled();
        });
    });
});
