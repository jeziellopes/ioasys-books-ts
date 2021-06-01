export interface Book {
  authors: string[];
  title: string;
  description: string;
  pageCount: number;
  category: string;
  imageUrl: string;
  language: string;
  isbn10: string;
  isbn13: string;
  publisher: string;
  published: number;
  id: string;
}

export interface Books {
  data: Book[];
  page: number;
  totalItems: number;
  totalPages: number;
}
