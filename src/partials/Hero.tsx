import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          你好, 我是 <GradientText>AI 3D 互动开发者</GradientText> 👋
        </>
      }
      description={
        <>
          让人人都能创作3D世界！{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            我的世界
          </a>{' '}
        自由地创作3D互动世界,{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            我的粉丝推广
          </a>{' '}
          让无数的朋友喜欢你，无数的客户得到惊喜！
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
