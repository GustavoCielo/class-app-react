import HeaderAndAside from "../../components/HeaderAndAside"
import SearchArea from "../../components/SearchArea"
import FilterCourses from "../../components/FilterCourses"


const Courses = () => {

return(
  <HeaderAndAside page="courses">
    <FilterCourses/>
    <SearchArea/>
  </HeaderAndAside>
)
}
export default Courses