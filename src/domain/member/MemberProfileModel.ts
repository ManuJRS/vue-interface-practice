import type { MemberProfilePrimitives, MembershipTier } from "./MemberProfileType"

export class MemberProfileModel {
  private readonly Id: string
  private readonly FullName: string
  private readonly Email: string
  private readonly Tier: MembershipTier
  private readonly Points: number
  private readonly IsActive: boolean
  private readonly JoinedAt: Date

  private constructor (data: MemberProfilePrimitives) {
    this.Id = data.Id
    this.FullName = data.FullName.trim()
    this.Email = data.Email.trim().toLowerCase()
    this.Tier = data.Tier
    this.Points = data.Points
    this.IsActive = data.IsActive
    this.JoinedAt = new Date(data.JoinedAtISO)
  }

  static create (data: MemberProfilePrimitives): MemberProfileModel {
    if (!data.Id) throw new Error("Id is required")
    if (!data.FullName) throw new Error("FullName is required")
    if (!data.Email.includes("@")) throw new Error("Email is invalid")
    if (data.Points < 0) throw new Error("Points cannot be negative")

    const time = new Date(data.JoinedAtISO).getTime()
    if (Number.isNaN(time)) throw new Error("JoinedAtISO is invalid")

    return new MemberProfileModel(data)
  }

  get DisplayName (): string {
    return this.FullName
  }

  get TierLabel (): string {
    return this.Tier
  }

  get PointsLabel (): string {
    return this.Points.toLocaleString("en-US")
  }

  get StatusLabel (): string {
    return this.IsActive ? "Active" : "Inactive"
  }

  get JoinedAtLabel (): string {
    const yyyy = this.JoinedAt.getFullYear()
    const mm = String(this.JoinedAt.getMonth() + 1).padStart(2, "0")
    const dd = String(this.JoinedAt.getDate()).padStart(2, "0")
    return `${yyyy}-${mm}-${dd}`
  }

  toPrimitives (): MemberProfilePrimitives {
    return {
      Id: this.Id,
      FullName: this.FullName,
      Email: this.Email,
      Tier: this.Tier,
      Points: this.Points,
      IsActive: this.IsActive,
      JoinedAtISO: this.JoinedAt.toISOString(),
    }
  }
}
