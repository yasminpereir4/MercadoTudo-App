import { ChatByIdParams } from "../pages/Chat/ChatById";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Chat: undefined;
      Auth: undefined;
      Home: undefined;
      ChatById: ChatByIdParams;
    }
  }
}
