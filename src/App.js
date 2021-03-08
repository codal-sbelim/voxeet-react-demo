import { reducer as voxeetReducer } from "@voxeet/react-components"
import React from "react"
import thunkMidleware from "redux-thunk"
import { combineReducers, createStore, applyMiddleware } from "redux"

import { ConferenceRoom, VoxeetProvider } from "@voxeet/react-components"

// Import Style
import "@voxeet/react-components/dist/voxeet-react-components.css"

const reducers = combineReducers({
  voxeet: voxeetReducer,
})

const configureStore = () =>
  createStore(reducers, applyMiddleware(thunkMidleware))

const settings = {
  consumerKey: "w8D4FQhcKmsrN11rmj1VdA==",
  consumerSecret: "lhlioRUZky9_SWUF9ZeWfF8vktq8w9vf2Gp24PdUvyg=",
  conferenceAlias: "Sample",
  autoJoin: true,
  displayActions: ["mute", "video", "recording", "screenshare"],
  disableSounds: false
}

function App() {
  console.log('--- test ---');
  console.log({settings});
  return (
    <VoxeetProvider store={configureStore()}>
      <ConferenceRoom
        autoJoin={settings.autoJoin}
        consumerKey={settings.consumerKey}
        consumerSecret={settings.consumerSecret}
        conferenceAlias={settings.conferenceAlias}
        displayActions={settings.displayActions}
        disableSounds={settings.disableSounds}
      />
    </VoxeetProvider>
  )
}

export default App