import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses() : object
    {
        return { message: "All courses fetched", data: [] } ;
    }

    getCourseById(id: string) : object
    {
        return { message: "Course fetched", Id: id };
    }
 
    createCourse(name: string, code: string) : object
    {
        return {
            message: "Course created", 
            data: 
                {
                    name, code
                }
        };
    }
}
