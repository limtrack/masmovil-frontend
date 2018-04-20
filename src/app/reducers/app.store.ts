export class AppStore {
  constructor(
    public items: any,
    public selectedItem: any,
    public showLoading: boolean
  ) { }
}

export const initialAppStore: AppStore = {
  items: [],
  selectedItem: {},
  showLoading: false
};