<template>
  <div :class="['typography', inverse && 'inverse', feedback, modifier, size]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    modifier: {
      type: String,
      default: 'content'
    },

    feedback: {
      type: String,
      required: false
    },

    size: {
      type: String,
      required: true
    }
  },

  inject: {
    inverse: {
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.typography {
}

.typography::selection {
  color: #fff;
  background: #000;
}

.typography.inverse::selection {
  color: #000;
  background: #fff;
}

.typography.link {
  color: #094efd;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
  &:active {
    opacity: 0.6;
  }
}

/* Highlight */
.highlight {
  color: #000;
}

.highlight.inverse {
  color: #fff;
}

.highlight.marquee {
  font-size: 28px;
}

.highlight.xxs {
  font-size: 16px;
}

.highlight.xs {
  font-size: 18px;
}

.highlight.sm {
  font-size: 24px;
}

.highlight.sm-inflated {
  font-size: 24px;
}

.highlight.md {
  font-size: 28px;
}

.highlight.lg {
  font-size: 28px;
}

.highlight.xl {
  font-size: 28px;
  line-height: 108%;
}

.highlight.xxl {
  font-size: 28px;
}

.highlight.stat {
  font-size: 28px;
}

.highlight.marquee {
  font-size: 28px;
}

@media (min-width: 960px) {
  .highlight.xxs {
    font-size: 18px;
  }

  .highlight.xs {
    font-size: 18px;
  }

  .highlight.sm {
    font-size: 24px;
  }

  .highlight.sm-inflated {
    font-size: 24px;
  }

  .highlight.md {
    font-size: 38px;
  }

  .highlight.lg {
    font-size: 38px;
  }

  .highlight.xl {
    font-size: 38px;
    line-height: 108%;
  }

  .highlight.xxl {
    font-size: 38px;
  }

  .highlight.stat {
    font-size: 48px;
  }

  .highlight.marquee {
    font-size: 70px;
  }
}

/* Content */
.content {
  color: #000;
}

.content.inverse {
  color: #fff;
}

.content.success {
  color: #4251fa;
}

.content.error {
  color: #cc0025;
}

.content.sm {
  font-size: 13px;
  line-height: 164.5%;
}

.content.md {
  font-size: 16px;
  line-height: 162.5%;
}

.content.lg {
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
}

.content.xl {
  font-size: 16px;
  line-height: 162.5%;
}

.content.xxl {
  font-size: 16px;
  line-height: 162.5%;
}

@media (min-width: 960px) {
  .content.sm {
    font-size: 13px;
    line-height: 164.5%;
  }

  .content.md {
    font-size: 16px;
    line-height: 162.5%;
  }

  .content.lg {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
  }

  .content.xl {
    font-size: 21px;
    line-height: 159.8%;
  }

  .content.xxl {
    font-size: 21px;
    line-height: 159.8%;
  }
}
</style>
