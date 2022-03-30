import useSWR from 'swr';
// import fetch from 'unfetch';

export default function usePets() {
    const url = 'http://127.0.0.1:3000/pets';
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, error } = useSWR(url, fetcher);
    console.log('pets', data);
    return {
        pets: data,
        isLoading: !error && !data,
        isError: error
    };
}
