export type SneakerType = {
    id:number
    label: string
    image: string
    price: number
    is_favorite: boolean
    is_purchased:boolean
    is_added:boolean
    icon?:string
    createdAt?: string
}

export type SneakersResponse = {
    data: SneakerType[]
    count: number
    meta: {
        page: number
        take: number
        total: number
        totalPages: number
        hasPrev: boolean
        hasNext: boolean
        orderBy: 'id' | 'price'
        sortOrder: 'asc' | 'desc'
        createdAt: string
    }
}