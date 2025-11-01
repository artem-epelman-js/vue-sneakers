import { defineStore } from 'pinia'
import {computed, ref} from 'vue'
import type { SneakerType } from '@/types'
import { supabase } from '@/supabase'

export const useSneakersStore = defineStore('sneakers', () => {
    const data = ref<SneakerType[]>([])
    const loading = ref(false)
    const error = ref<string | null>(null)
    const isOpenCartDrawer = ref<boolean>(false)

    // Получить все кроссовки
    async function getAll(filters?: {
        is_favorite?: boolean
        is_added?: boolean
        min_price?: number
        max_price?: number
        search?: string
        sort_by?: string
        ascending?: boolean
        is_purchased?: boolean
    }) {
        loading.value = true
        error.value = null

        try {
            // обьявление квери
            let query = supabase.from('sneakers').select('*')

            // фильтрация
            if (filters?.is_favorite !== undefined)
                query = query.eq('is_favorite', filters.is_favorite)

            if (filters?.is_purchased !== undefined)
                query = query.eq('is_favorite', filters.is_purchased)

            if (filters?.is_added !== undefined)
                query = query.eq('is_added', filters.is_added)

            if (filters?.min_price !== undefined)
                query = query.gte('price', filters.min_price)

            if (filters?.max_price !== undefined)
                query = query.lte('price', filters.max_price)

            if (filters?.search)
                query = query.ilike('label', `%${filters.search}%`)

            // сортировка
            if (filters?.sort_by)
                query = query.order(filters.sort_by, { ascending: filters.ascending ?? true })
            else
                query = query.order('id', { ascending: true }) // дефолт

            // сет в дату
            const { data: result, error: supabaseError } = await query

            if (supabaseError) throw supabaseError

            data.value = result || []
        } catch (e: any) {
            console.error('Supabase getAll error:', e)
            error.value = e.message ?? 'Failed to load sneakers'
        } finally {
            loading.value = false
        }
    }


    async function addSneaker(sneaker: Omit<SneakerType, 'id'>) {
        loading.value = true
        try {
            const { error: supabaseError } = await supabase
                .from('sneakers')
                .insert([sneaker])
            if (supabaseError) throw supabaseError

            await getAll()
        } catch (e: any) {
            console.error('Supabase add error:', e)
            error.value = e.message ?? 'Failed to add sneaker'
        } finally {
            loading.value = false
        }
    }

    async function deleteSneaker(id: number) {
        loading.value = true
        try {
            const { error: supabaseError } = await supabase
                .from('sneakers')
                .delete()
                .eq('id', id)
            if (supabaseError) throw supabaseError

            await getAll()
        } catch (e: any) {
            console.error('Supabase delete error:', e)
            error.value = e.message ?? 'Failed to delete sneaker'
        } finally {
            loading.value = false
        }
    }

    async function update(id: number, value: boolean, field:string) {
        loading.value = true
        try {
            const { error: supabaseError } = await supabase
                .from('sneakers')
                .update({ [field]: value })
                .eq('id', id)
            if (supabaseError) throw supabaseError

            await getAll()
        } catch (e: any) {
            console.error('Supabase update error:', e)
            error.value = e.message ?? 'Failed to update sneaker'
        } finally {
            loading.value = false
        }
    }

    // Изменить is_added (корзина)

    return { data, loading, error, isOpenCartDrawer, getAll, update }
})
