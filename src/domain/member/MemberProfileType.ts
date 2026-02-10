export type MembershipTier  = "Silver" | "Gold" | "Platinum"

export interface MemberProfilePrimitives {
  Id: string
  FullName: string
  Email: string
  Tier: MembershipTier
  Points: number
  IsActive: boolean
  JoinedAtISO: string

}
