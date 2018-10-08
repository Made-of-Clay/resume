<template>
    <header>
        <canvas ref="canvas"></canvas>

        <slot></slot>
    </header>
</template>

<script>
const randGen = {
    min: -1,
    max: 1,
    top: () => [random(min, max), random(0.1, max)],
    right: () => [random(min, -0.1), random(min, max)],
    bottom: () => [random(min, max), random(min, -0.1)],
    left: () => [random(0.1, max), random(min, max)],
};
export default {
    data() {
        return {
            ctx: null,
            ball: {
                x: 0,
                y: 0,
                vx: 0,
                vy: 0,
                r: 0,
                alpha: 1,
                phase: 0
            },
            ball_color: {
                r: 207,
                g: 255,
                b: 4
            },
            R: 2,
            balls: [],
            alpha_f: 0.03,
            alpha_phase: 0,
             
            // Line
            link_line_width: 0.8,
            dis_limit: 260,
            add_mouse_point: true,
            mouse_in: false,
            mouse_ball: {
                x: 0,
                y: 0,
                vx: 0,
                vy: 0,
                r: 0,
                type: 'mouse'
            },
        };
    },

    mounted() {
        this.ctx = this.refs.canvas.getContext('2d');
    },

    methods: {
        getRandomSpeed(pos) {
            return randGen[pos]();
        },

        renderBalls() {
            this.balls.forEach(ball => {
                if (!ball.type) {
                    const {r, g, b} = this.ball_color;
                    this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${ball.alpha})`;
                    this.ctx.beginPath();
                    this.ctx.arc(ball.x, ball.y, this.R, 0, Math.PI*2, true);
                    this.ctx.closePath();
                    this.ctx.fill();
                }
            })
        },
    },
};

function random(min, max) {
    return Math.random()*(max - min) + min;
}
</script>