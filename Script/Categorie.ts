interface Category {
    name: string;
    values: string[];
    id:Number
    createcategory: () => void;
    deleteCategory: () => void;
    
}
export default Category;