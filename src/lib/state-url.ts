
export interface SearchParams {
    search?: string;
    genre?: string;
}

//This function is used to create an object from SearchParams
// {search:"Some string",genre:[45,89]} --> {search:"Some string",genre:45}
export function parseSearchParams(
    params: Record<string, string | string[] | undefined>
  ): SearchParams {
    return {
      search: typeof params.search === 'string' ? params.search : undefined,
      genre: Array.isArray(params.genre) ? params.genre[0] : params.genre,
    };
  }

//This function is used to convert URLSearchParams object to queryString
//{search:"Some string",genre:[45,89]} --> ?search="Some string"&genre=45,89
export function stringifySearchParams(params: SearchParams): string {
    const urlParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
            urlParams.append(key, value);
        }
    });
    return urlParams.toString();
}