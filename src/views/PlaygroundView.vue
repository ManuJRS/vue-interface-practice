<script lang="ts" setup>
import { computed } from "vue"
import { MemberProfileModel } from "@/domain/member/MemberProfileModel";
import { MEMBER_PROFILE_MOCK } from "@/mocks/memberProfile"

const Model = MemberProfileModel.create(MEMBER_PROFILE_MOCK)
const View = computed(() => ({
  Name: Model.DisplayName,
  Tier: Model.TierLabel,
  Points: Model.PointsLabel,
  Status: Model.StatusLabel,
  Joined: Model.JoinedAtLabel
}))
</script>

<template>
  <h1>Playground</h1>
  {{ View.Name }}
  {{ View.Tier }}
  {{ View.Points }}
  {{ View.Status }}
  {{ View.Joined }}
</template>
