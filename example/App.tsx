import {Button, ConfigProvider, Input} from "../packages";
import zhCN from '../packages/locale/zh_CN';
import enUS from '../packages/locale/en_US';
import {useMemo, useState} from "react";
import darkAlgorithm from "../packages/theme/themes/dark";
import AppHeader from "./components/app/Header";
function App() {
    const [value,setValue] = useState('')
    const [bo,setBo] = useState(false)
    const locale = useMemo(()=>{
        return bo?zhCN:enUS
    },[bo])

    const [bo1,setBo1] = useState(false)
    const ld = useMemo(()=>{
        return bo1
    },[bo1])

  return (
    <div
      className="App"
    >
        <AppHeader bo1={bo1} bo={bo} setBo={setBo} setBo1={setBo1}></AppHeader>
        <ConfigProvider locale={locale} theme={{
            token: {
                colorPrimary: 'skyblue',
            },
            algorithm: ld?[darkAlgorithm]:[],
        }}>
            <Button>你好</Button>
            <Input value={value} onChange={(e:any)=>{
                setValue(e.target.value)
            }}/>
        </ConfigProvider>
    </div>
  );
}

export default App;
