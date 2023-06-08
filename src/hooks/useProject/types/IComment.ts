export interface IResponse {
  id: string
  content: string
  likes: number
  unlikes: number
  created_at: Date
  user_id: string
  comment_id: string
}

export interface IComment {
  id: string
  content: string
  to_unknown: string | null
  likes: number
  unlikes: number
  created_at: Date
  updated_at: Date
  user_id: string
  project_id: string | null
  objective_id: string | null
  personality_id: string | null
  appearance_id: string | null
  dream_id: string | null
  fear_id: string | null
  power_id: string | null
  couple_id: string | null
  value_id: string | null
  wishe_id: string | null
  trauma_id: string | null
  book_id: string | null
  capitule_id: string | null
  scene_id: string | null
  responses: IResponse[]
}
