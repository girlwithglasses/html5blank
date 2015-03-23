<?php
/*
Template Name: Front Page
*/
	get_header(); ?>

	<div class="main" id="front-page" role="main">
		<section>
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<?php the_content(); ?>
			</article>
		</section>
	</div>
<?php get_footer(); ?>
