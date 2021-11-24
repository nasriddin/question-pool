export default interface Menu {
    name: string,
    link?: string,
    id: string,
    children?: Menu[],
    click?: ()=>void
}