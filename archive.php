<?php get_header(); ?>
<main id="main" class="site-main" role="main">
<?php if ( have_posts() ) : ?>
  <header class="page-header">
    <?php the_archive_title( '<h1 class="page-title">', '</h1>' ); ?>
  </header>

  <?php
  while ( have_posts() ) : the_post();
    get_template_part( 'layouts/content', get_post_type() );
  endwhile;
    the_posts_pagination( array(
      'prev_text'          => '<-',
      'next_text'          => '->'
    ) );
  else :
    get_template_part( 'layouts/content', 'none' );
endif;
?>
</main>
<?php get_footer(); ?>