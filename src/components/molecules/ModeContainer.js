import Atoms from '../atoms'
import dashboard from '../../assets/dashboard_black_icon.png'
import ad from '../../assets/ad_black_icon.png'

const ModeContainer = () => {
 return (
    <>
    <Atoms.Title1 service>광고센터</Atoms.Title1> 
     <Atoms.ModeWrapper>
        <Atoms.ModeIcon src={dashboard}/>
        <Atoms.Title2>대시보드</Atoms.Title2>
    </Atoms.ModeWrapper>
    <Atoms.ModeWrapper>
        <Atoms.ModeIcon src={ad}/>
        <Atoms.Title2>광고관리</Atoms.Title2>
    </Atoms.ModeWrapper>  
    </>


 )
}

export default ModeContainer