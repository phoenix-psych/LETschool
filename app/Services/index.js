import { request, gql } from 'graphql-request';

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clpmxmyr817ik01uie7ghhmw5/master";

export const getCourseList = async (courseLevel) => {
  const courseQuery = gql`
    query CourseList($courseLevel: CourseLevel) {
      courses(where: { courseLevel: $courseLevel }) {
        id
        name
        courseLevel
        price
        tags
        time
        auther
        banner {
          url
        }
        chapter {
          id
        }
        description {
          markdown
        }
      }
    }
  `;

  const courseVariables = {
    courseLevel: courseLevel,
  };

  try {
    const courseResult = await request(MASTER_URL, courseQuery, courseVariables);
    return courseResult;
  } catch (error) {
    console.error('Error fetching course list:', error);
    throw error;
  }
};

export const getKitList = async () => {
  const kitQuery = gql`
    query KitList {
      kits {
        name
        price
        mrp
        grade
        image {
          url
        }
      }
    }
  `;

  try {
    const kitResult = await request(MASTER_URL, kitQuery);
    return kitResult;
  } catch (error) {
    console.error('Error fetching kit list:', error);
    throw error;
  }
};
