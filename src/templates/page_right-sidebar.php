<?php
/*
Template Name: Right Sidebar
*/
	get_header(); ?>

	<div class="main" id="primary-left" role="main">
		<!-- section -->
		<section>
			<h1><?php the_title(); ?></h1>
		<?php if (have_posts()): while (have_posts()) : the_post(); ?>
			<!-- article -->
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<?php the_content(); ?>

				<!-- ?php comments_template( '', true ); // Remove if you don't want comments ?>
				<br class="clear">
				<?php edit_post_link(); ?> -->

			</article>
		<?php endwhile; ?>
		<?php else: ?>
			<article>
				<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
			</article>
		<?php endif; ?>
		</section>
	</div>
<?php get_sidebar('right'); ?>
<?php get_footer(); ?>
