export class Section {
    title: string;
    fields = new Array<SectionField>();
    _id: string;
    isValid = false;
    selected = false;
    index: number;
}
export class SectionField {
    type: string;
    value: any;

}
