import BasicSelect from "./Select";
import Adapter from "enzyme-adapter-react-16";
import { IBasicSelectProps } from "./Select";
import { shallow, mount, configure } from "enzyme";

configure({ adapter: new Adapter() });

const setUp = (props: IBasicSelectProps) => shallow(<BasicSelect {...props} />);
describe("Select component testing", () => {
  const componentProps = {
    columns: [
      {
        fieldName: "role",
        id: "demo-simple-select",
        label: "Select person role",
        labelId: "demo-simple-select-label",
        options: [
          {
            title: "Admin role",
            value: "ADMIN_ROLE",
          },
          {
            title: "User role",
            value: "USER_ROLE",
          },
        ],
      },
    ],
    title: "Select person roleSelect person role",
    onChangeEvent: jest.fn(),
  };
  let component: any;
  //@ts-ignore
  let selectArea: any;
  beforeEach(() => {
    component = setUp(componentProps);
    selectArea = component.find("#demo-simple-select");
  });
  it("Should set Admin role when admin role was selected", () => {
    expect(selectArea.value).toBe(undefined);
    selectArea.simulate("change", { target: { fieldName: "role", value: "Admin" } });
    selectArea = component.find("#demo-simple-select");
    expect(selectArea.prop("value")).toEqual("Admin");
  });
});


export {};
