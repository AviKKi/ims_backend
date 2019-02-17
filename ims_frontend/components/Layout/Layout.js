import {connect} from 'react-redux'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import TopLoader from '../Loaders/TopLoader'
//import TopLoader from '../Common/TopLoader'


const  Layout = props => {
  console.log({isAuthenticated:props.isAuthenticated})
  return (
  <>
    <TopLoader />
    <Navbar isAuthenticated={props.isAuthenticated} isAdmin={props.isAdmin} />
      { props.children }
    <Footer />
  </>
)}

export const withLayout = Component => props => (
  <Layout >
    { Component }
  </Layout>
)

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    isAuthenticated:  state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin
  }

}


export default connect(mapStateToProps)(Layout)
