import HeaderAndAside from "../../components/HeaderAndAside";
import SearchArea from "../../components/SearchArea";
import FilterCourses from "../../components/FilterCourses";
import { motion } from "framer-motion";

const Courses = () => {
  return (
    <motion.div
      initial={{ x: -2000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 2000, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderAndAside page="courses">
        <FilterCourses />
        <SearchArea />
      </HeaderAndAside>
    </motion.div>
  );
};
export default Courses;
