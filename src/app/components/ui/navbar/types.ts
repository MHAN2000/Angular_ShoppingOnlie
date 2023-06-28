interface item {
    label: string,
    icon: string,
    routerLink: string[]
}

export interface IMenuItem {
    label: string,
    items: item[]
}