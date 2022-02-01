import { By2, driver } from 'selenium-appium'
import TestEnvironment from '../TestEnvironment'

const fileTab = By2.nativeName('File tab');
const open = By2.nativeName('Open');
const image = By2.nativeName('docornote.jpg');
const openImage = By2.nativeAccessibilityId('1');
const text = By2.nativeName('Text');
const element  = By2.nativeClassName('Afx:2d0000:8');
const textInput = By2.nativeClassName('RICHEDIT50W');

beforeAll(() => {
return TestEnvironment.setup();;
})
afterAll(() => {
return TestEnvironment.teardown();
})
describe('Paint Test', () => {
test('Editing in Paint', async () => {
await fileTab.click();
await open.click();
await image.click();
await openImage.click();
await text.click();
await element.click();
await textInput.sendKeys('test');

})
});