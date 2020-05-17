import { action, observable } from "mobx";

interface ICommentsViewModel {
  shown: boolean;
  showComments(): void;
  hideComments(): void;
}

class CommentsViewModel implements ICommentsViewModel {
  @observable
  shown = true;

  @action.bound
  showComments(): void {
    this.shown = true;
  }

  @action.bound
  hideComments(): void {
    this.shown = false;
  }
}
