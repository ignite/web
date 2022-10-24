import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgDeleteUsers } from "./types/newvuetest/newvuetest/tx";
import { MsgCreateUsers } from "./types/newvuetest/newvuetest/tx";
import { MsgUpdateUsers } from "./types/newvuetest/newvuetest/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/newvuetest.newvuetest.MsgDeleteUsers", MsgDeleteUsers],
    ["/newvuetest.newvuetest.MsgCreateUsers", MsgCreateUsers],
    ["/newvuetest.newvuetest.MsgUpdateUsers", MsgUpdateUsers],
    
];

export { msgTypes }