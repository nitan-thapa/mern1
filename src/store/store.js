import {createStore} from "redux"
import { rootreducer } from "../reducers/rootreducer"

const store=createStore(rootreducer)

export {store}